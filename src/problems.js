const Problems = [
    createQuestion(1, 'rnb3k1/pp1p3p/8/2pP1pp1/2P2N2/2PBr3/P5PP/R4RK1 w - - 0 17'),
    createQuestion(2, '2n2r2/1q1b1rbk/p2p2p1/2pPp1Pp/N1P1P3/1R3P2/1PQBBK2/5R2 b - - 14 28'),
    createQuestion(3, '2n2r2/6bk/p2p2p1/2PP3p/N1P1Pp1q/3R1P2/2Q1B1K1/8 b - - 0 39'),
    createQuestion(4, '2r3k1/5p2/2p1qnp1/3p3p/3P4/3BP2P/2Q2PP1/R5K1 w - - 0 26')
  ];

function createQuestion(id, FEN) {
  return ({
    id,
    FEN
  });
}

export const ProblemsCount = Problems.length;
export default Problems;
