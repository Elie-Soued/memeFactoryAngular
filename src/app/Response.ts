export interface Response {
  success: boolean;
  data: {
    memes: [
      {
        id: string;
        name: string;
        url: string;
        width: number;
        height: number;
        box_count: number;
      }
    ];
  };
}
