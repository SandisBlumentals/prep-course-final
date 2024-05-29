export type XO = "X" | "O" | "-";

export class Game {
  gameFieldCells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  gameEnd:boolean = false;
  turn: XO = "X";

  getCells(): XO[] {
    return this.gameFieldCells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    const cells = this.gameFieldCells;
    
    //rows
    if (cells[0] === cells[1] && cells[0] === cells[2] && (cells[0] === "X" || cells[0] === "O")){
      this.gameEnd = true;
      return this.gameFieldCells[0];
    }
    if (cells[3] === cells[4] && cells[3] === cells[5] && (cells[3] === "X" || cells[3] === "O")){
      this.gameEnd = true;
      return this.gameFieldCells[3];
    }
    if (cells[6] === cells[7] && cells[6] === cells[8] && (cells[6] === "X" || cells[6] === "O")){
      this.gameEnd = true;
      return this.gameFieldCells[6];
    }
    
    //colloms
    if (cells[0] === cells[3] && cells[0] === cells[6] && (cells[0] === "X" || cells[0] === "O")){
      this.gameEnd = true;
      return this.gameFieldCells[0];
    }
    if (cells[1] === cells[4] && cells[1] === cells[7] && (cells[1] === "X" || cells[1] === "O")){
      this.gameEnd = true;
        return this.gameFieldCells[1];
    }
    if (cells[2] === cells[5] && cells[2] === cells[8] && (cells[2] === "X" || cells[2] === "O")){
      this.gameEnd = true;
        return this.gameFieldCells[2];
    }
  
    //diagonals
    if (cells[0] === cells[4] && cells[0] === cells[8] && (cells[0] === "X" || cells[0] === "O")){
      this.gameEnd = true;
      return this.gameFieldCells[0];
    }
    if (cells[2] === cells[4] && cells[2] === cells[6] && (cells[2] === "X" || cells[2] === "O")){
      this.gameEnd = true;
      return this.gameFieldCells[2];
    }

    return "-";
  }

  isTie(): boolean {
    const cells = this.gameFieldCells;
    var turnCount = 0;
    for (var i = 0; i < cells.length; i++){
      if (cells[i] !== "-" && this.gameEnd === false){
        turnCount++;
      }
    }
    if (turnCount === 9) return true;
    return false;
  }

  onClick(i: number): void {
    if (this.gameEnd === false){
      if (this.gameFieldCells[i] === "-"){
        this.gameFieldCells[i] = this.turn;
        if (this.turn === "X") this.turn = "O"
        else this.turn = "X";
      }
    }
  }

  restart(): void {
    location.reload();
  }
}
