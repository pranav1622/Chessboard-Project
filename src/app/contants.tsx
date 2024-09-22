import { FC } from "react";

export const baseWhitePieces = ["R", "N", "B", "Q", "K", "B", "N", "R"];
  export const frontlinePieces = Array(8).fill("P");
  export const baseBlackPieces = ["R", "N", "B", "Q", "K", "B", "N", "R"];
  type style=React.SVGProps<SVGSVGElement>
export type chessPiece = {
  i: number;
  j: number;
  boxcolorNumber: number;
  chessPiece: string;
  color: string;
  index: string;
};

const King: FC<style> = (props) => (
    <svg height="100" width="100" viewBox="0 0 45 45" {...props}>
      <g style={{ opacity: 1, fill: '#000000', fillOpacity: 1, fillRule: 'evenodd', stroke: '#000000', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1 }}>
        <path d="M 22.5,11.63 L 22.5,6" style={{ fill: 'none', stroke: '#000000', strokeLinejoin: 'miter' }} />
        <path d="M 20,8 L 25,8 L 22.5,6 L 20,8 z" style={{ fill: '#000000', stroke: '#000000', strokeLinejoin: 'miter' }} />
        <path d="M 22.5,25 C 23.33,25.08 23.92,24.17 24.5,23.5 C 26.17,21.58 27.17,19.58 27.5,18.5 C 27.58,18.33 27.33,17.67 27,17.5 C 26.25,17.08 25.58,17.33 25.5,17.5 C 25.17,18.17 24.08,19.92 22.5,21.5 C 20.92,19.92 19.83,18.17 19.5,17.5 C 19.42,17.33 18.75,17.08 18,17.5 C 17.67,17.67 17.42,18.33 17.5,18.5 C 17.83,19.58 18.83,21.58 20.5,23.5 C 21.08,24.17 21.67,25.08 22.5,25 z " style={{ fill: '#000000', fillOpacity: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter' }} />
        <path d="M 22.5,25 L 22.5,11.63" style={{ fill: 'none', stroke: '#000000', strokeLinejoin: 'miter' }} />
        <path d="M 9,39 C 10.5,37.5 10.5,32.5 9,31 C 7.5,29.5 7.5,24.5 9,23 C 10.5,21.5 10.5,16.5 9,15 C 7.5,13.5 7.5,8.5 9,7 C 10.5,5.5 15.5,5.5 17,7 C 18.5,8.5 18.5,13.5 17,15 C 15.5,16.5 15.5,21.5 17,23 C 18.5,24.5 18.5,29.5 17,31 C 15.5,32.5 15.5,37.5 17,39 C 18.5,40.5 23.5,40.5 25,39 C 26.5,37.5 26.5,32.5 25,31 C 23.5,29.5 23.5,24.5 25,23 C 26.5,21.5 26.5,16.5 25,15 C 23.5,13.5 23.5,8.5 25,7 C 26.5,5.5 31.5,5.5 33,7 C 34.5,8.5 34.5,13.5 33,15 C 31.5,16.5 31.5,21.5 33,23 C 34.5,24.5 34.5,29.5 33,31 C 31.5,32.5 31.5,37.5 33,39 C 34.5,40.5 39.5,40.5 41,39 C 42.5,37.5 42.5,32.5 41,31 C 39.5,29.5 39.5,24.5 41,23 C 42.5,21.5 42.5,16.5 41,15 C 39.5,13.5 39.5,8.5 41,7 C 42.5,5.5 47.5,5.5 49,7 C 50.5,8.5 50.5,13.5 49,15 C 47.5,16.5 47.5,21.5 49,23 C 50.5,24.5 50.5,29.5 49,31 C 47.5,32.5 47.5,37.5 49,39 C 50.5,40.5 55.5,40.5 57,39" style={{ fill: 'none', stroke: '#000000', strokeLinejoin: 'miter' }} />
      </g>
    </svg>
);

export default King;