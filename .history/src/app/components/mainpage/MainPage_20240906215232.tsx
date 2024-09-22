import Chessboard from "../ChessBoard/ChessBoard";
const MainPage=()=> {
  const selection=window.getSelection();
  const text=selection?.toString();
  console.log(text);
  return (
    <>
      <h1 className=" flex justify-center w-full p-5 ">Chess Game</h1>
      <Chessboard />


      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.

      </div>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia esse dolorum veniam aspernatur obcaecati, nostrum cumque possimus facilis corporis tempora cum quo, quibusdam doloribus, maxime debitis amet eum. Suscipit.

      </div>
    </>
  );
}
export default MainPage;
