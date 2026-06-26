export type ApiResponse<T> = 
  | { success: true; data: T; error: null }
  | { success: false; data: null; error: string };

//União discriminada --> dois estados que essa API pode ter, evitando erros
//T --> parametro que vai ser preenchido com o tipo de dados;
// | --> OR

//Força os tratamento de erros, força conferir se data está certo antes de ser enviado