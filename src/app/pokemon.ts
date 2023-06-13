export interface IPokemon {
  count : number,
  results : [{
    name: string,
    url: string
  }]
}

export interface IPokemon_card{
  id : number,
  name : string,
  sprites : {
    front_default : string
  }
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
  }],
  moves : [{
    move : {
      name: string,
      url : string
    },
    version_group_details : [{
      level_learned_at : number
    }]
  }],
  stats : [{
    base_stat : number,
    effort : number,
    stat : { name: string}
  }]
}

export interface IPokemon_ability{
  id : number,
  name : string
}

export interface IPokemon_move{
  id : number,
  name : string,
  accuracy : number,
  power : number,
  pp : number,
  type : {
    name : string
  },
  damage_class : {
    name : string
  },
  flavor_text_entries : [{
    flavor_text : string,
    language : string,
    version_group : string
  }]
}
