import React, { Component } from 'react';
import ChessBoard from 'chessboardjs';
import Problems from '../problems';
import '../styles/index.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.board = null;
    }

    componentDidMount() {
        var cfg = {
          pieceTheme: 'images/chess-pieces/{piece}.png',
          position: this.props.fen,
          draggable: true
        };
        this.board = ChessBoard('chessboard', cfg);
    }

    render() {
        if (this.board) {
            this.board.position(this.props.fen);
        }
        return (
            <div>
                <div id="chessboard" className="board"></div>
            </div>
        );
    }
}
