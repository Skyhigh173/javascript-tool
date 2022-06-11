class Utils {

  constructor() {}

  getInfo() {
    return {
      id: 'Utils',
      name: 'Utils',

      
      blocks: [
          {
              opcode: 'moreOrEqual',

              blockType: Scratch.BlockType.BOOLEAN,

              text: '[A] => [B]',
              arguments: {
                A: {
                  type: Scratch.ArgumentType.NUMBER
                },
                B: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 50
                }
              }
          }
      ]
    }
  }
  moreOrEqual({A, B}) {
    return A >= B;
  }
}
     
Scratch.extensions.register(new Utils());
