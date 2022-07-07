const new_reminder = document.getElementById("new_reminder");
const new_date = document.getElementById("new_date");
const table_reminder = document.getElementById("table_reminder");


function submit_reminder(){
    let value_reminder = new_reminder.value;
    let value_date = new_date.value;
    if (value_reminder != ''){
        //Renderizar div com as informaçoes passadas
        table_reminder.innerHTML +=`<tr id="table_content">
            <td><input type="checkbox" name="selected" id=""></td>
            <td>`+ value_reminder + `</td>
            <td>`+ value_date + `</td>
            <td><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
        var object = object_rules(value_reminder,value_date);
        array_rules.push(object);
        console.log(array_rules);
    }
    localStorage.setItem("lista",JSON.stringify(array_rules));
}

/*
//renderizar table_reminder
table_reminder.innerHTML +=`<tr id="table_content">
    <td><input type="checkbox" name="selected" id=""></td>
    <td>P. Calculo </td>
    <td>12/07/2022</td>
    <td><i class="fa-solid fa-trash-can"></i></td>
</tr>`*/
