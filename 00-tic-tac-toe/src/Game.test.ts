import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  
  it(`should place X on the clicked cell`, () => {
    const game = new Game();

    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it(`should place O on the clicked cell`, () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  
  it(`should not place a different value when its X or O clicked cell`, () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it(`should declare a winner by same symbol row`, () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it(`should declare a winner by same symbol collomn`, () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(2);
    game.onClick(6);

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "X", "-", "-",
      "X", "-", "-"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it(`should declare a winner by same symbol diagonal`, () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(5);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "X", "O",
      "-", "-", "X"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it(`should declare a tie`, () => {
    const game = new Game();

    game.onClick(0); //X
    game.onClick(1); //O

    game.onClick(2); //x
    game.onClick(4); //o

    game.onClick(3); //x
    game.onClick(6); //o

    game.onClick(5); //x
    game.onClick(8); //o

    game.onClick(7); //x

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "X", "O", "X",
      "O", "X", "O"
    ]);

    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
});
