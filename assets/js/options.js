'use estrict';
function createOptions(array) {
  var selected = $('<select></select>');
  var option = $('<option></option>');
  option.text('Selecciona una especie');
  option.attr('hidden','');
  selected.append(option);
  array.forEach((elem)=>{
    var optionFamily = $('<option></option>');
    var people = elem.people[0];
    optionFamily.val(people.slice(people.length-3))
    optionFamily.text(elem.name);
    selected.append(optionFamily);
  })

  selected.on('change',(e)=>{
    e.preventDefault();
    var value = selected.val();
    console.log(value);
  })
  // console.log(option.val());

  return selected;
}
