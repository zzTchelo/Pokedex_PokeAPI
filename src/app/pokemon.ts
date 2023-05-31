export interface IPokemon {
  count : number,
  next : string,
  previous : string,
  results : [{
    name: String,
    url: String
  }]
}

export interface IPokemon_info {
  id : number,
  name : string,
  base_experience : number,
  height : number,
  weight : number,
  sprites : {
    front_default : string
  },
  types : [{
    slot: number,
    type : {
      name : string,
      url : string
    }
  }],
  abilities : [{
    is_hidden : boolean,
    slot : number,
    ability : {
      name : string,
      url : string
    }
  }]

}
