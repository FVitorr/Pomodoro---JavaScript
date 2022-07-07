const meuStorage = localStorage;
 
const array_rules = [
    {
        "rules": "P. Calculo",
        "date": "12/07/2022"
    },
]


function object_rules(rules,date){
    const new_rule = new Object
    new_rule.rules = rules;
    new_rule.date = date;
    return new_rule
}

