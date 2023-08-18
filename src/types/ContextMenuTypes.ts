type shortcutOption = {
    id:string,
    type:"Shortcut",
    name:string,
    command:string,
    disabled?:boolean,
    seperator?:boolean,
}

type subOption = {
    id:string,
    type:"Menu",
    name:string,
    seperator:boolean,
    subOptions:{
        id:string,
        name:string,
        command?:string,
        seperator?:boolean,
    }[],

}

type checkOption = {
    id:string,
    type:"Checkbox",
    seperator?:boolean,
    data:{
        id:string,
        name:string,
        command?:string,
        checked?:boolean,
    }[]
}

type radioOptions = {
    id:string,
    type:"Radio"
    value:string,
    label?:string,
    seperator?:boolean,
    data:{
        id:string,
        name:string,
        value:string,
    }[],
}


export type contextMenuOptionsType =  (shortcutOption | subOption | checkOption | radioOptions)[]