// export const useLudex = () => {
//   const connection = useConnection();
//   const wallet = useAnchorWallet();

//   const ludex = useMemo(() => {
//     if (!connection || !wallet) {
//       return null;
//     }

//     return new Ludex(connection, wallet);
//   }, [connection, wallet]);

//   return ludex;
// };
export {};
