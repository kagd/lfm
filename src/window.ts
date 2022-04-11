let token = localStorage.getItem('token');

export function getToken(){
  if(!token){
    let val: string|null = '';
    while(!val || val.trim() === ''){
      val = token = prompt('LFM Auth Token');
    }
    localStorage.setItem('token', val);
  }

  return token;
}
