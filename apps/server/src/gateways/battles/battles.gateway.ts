import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  ConnectedSocket,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { BattleService } from "src/modules/battles/battle.service";

@WebSocketGateway({ namespace: "race-collection", cors: true })
export class BattleGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly battleService: BattleService) {}
  @WebSocketServer() server: Server;

  handleConnection(client: any) {
    console.log("Client connected", client.id);
    this.sendBattles(client);
  }

  handleDisconnect(client: any) {
    console.log("Client disconnected", client.id);
  }
  private async sendBattles(client: any) {
    const battles = this.battleService.getBattles();
    client.emit("availableBattles", battles);
  }

  @SubscribeMessage("createBattle")
  async createBattle(
    @MessageBody() data: { battleName: string; difficulty: string },
    @ConnectedSocket() client: Socket,
  ) {
    const battles = this.battleService.createBattle(
      data.battleName,
      "Test",
      data.difficulty,
      "random-challenge",
    );
    this.server.emit("availableBattles", battles);
    client.emit("battleCreated", battles[battles.length - 1].id);
  }
}
