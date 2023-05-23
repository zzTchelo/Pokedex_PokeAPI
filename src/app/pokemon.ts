export interface pokemon {
  count : number,
  next : string,
  previous : string,
  results : [{name: String, url: String}]
}

export interface pokemon_info {
  id : number,
  name : string,
  sprites : {front_default : string}
}
