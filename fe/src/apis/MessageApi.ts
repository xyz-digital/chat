export type Message = {
  _id: string;
  room: string;
  body: string;
};

class MessageApi {
  async createMessage(message: Partial<Message>) {
    const res = await fetch(`/api/rooms/${message.room}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const jsonData = await res.json();
    return jsonData.data;
  }
}

export const messageApi = new MessageApi();
