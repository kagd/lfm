import { getToken } from "./window";

const baseUrl = 'https://api2.lowfuelmotorsport.com/api';

function getHeaders(){
  return {
    Authorization: `Bearer ${getToken()}`,
    Accept: 'application/json',
    'Content-Type': 'appplication/json'
  }
}
  
async function get<T>(url: string): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`, {
    headers: getHeaders()
  });
  return await response.json();
}

async function post<T>(url: string, body: LooksLikeObject = {}): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'post',
    headers: getHeaders(),
    body: JSON.stringify(body),
  });
  return await response.json();
}

let user: User;

export async function fetchCurrentUser(){
  if(!user){
    user = await get<User>('/user');
  }
  return user;
};

export async function fetchSeasonEvent(eventindex: number){
  return get<Season[]>(`/seasons/getSeason?date=&event=&eventindex=${eventindex}`);
};

export async function register(raceId: number, carModel: number){
  const u = await fetchCurrentUser();

  return post(`/race/${raceId}/signUp`, {
    car_model: carModel,
    chat: false,
    code_of_conduct: false,
    nachname: u.nachname,
    origin: u.origin,
    shortname: u.shortname,
    twitch_channel: u.twitch_channel,
    vorname: u.vorname,
    youtube_channel: u.youtube_channel
  });
}

export async function withdraw(raceId: number){
  return get(`/race/${raceId}/withdraw`);
}

let cars: Promise<Car[]>;
export async function fetchCars(){
  if(!cars){
    cars = get('/lists/getCars');
  }
  
  return cars;
}

const regs = {} as {[key: string]: Registration[]}

export async function fetchRegistrations(raceIds: number[]){
  const key = JSON.stringify(raceIds);
  if(regs[key]){
    return regs[key];
  }
  const user = await fetchCurrentUser();
  regs[key] = await post<Registration[]>('/races/checkData', {
    races: raceIds,
    user,
  });

  return regs[key];
}

export async function fetchPastRaces(){
  const user = await fetchCurrentUser();
  return get<PastEvent[]>(`/users/getUsersPastRaces/${user.id}?start=0&limit=30`);
}