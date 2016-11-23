function addTen(num) {
	return num + 10;
}
function multiplyByFive(num) {
	return num * 5;
}
function convertToArray(num) {
	return someMagic(num);
}

var createBigArray = compose(convertToArray, multiplyByFive, addTen);

var myArray = createBigArray(10); // [1, 2, ..., 100]






function tagSuggestions(element) {
  return element.queryAll(By.css('li.list-group-item.suggested-tag'));
}

function selectedTags(element) {
  return element.queryAll(By.css('.tag.label.label-primary span.tag-name'));
}

function getItem(num) {
  return (array) => array[num];
}

function activeClass(element) {
  return element.classes['active'];
}

function suggestion(which) {
  return compose(getItem(which), tagSuggestions);
}

function suggestionActive(which) {
  return compose(activeClass, getItem(which), tagSuggestions);
}

function selectedTag(which) {
  return compose(getItem(which), selectedTags);
}

it('should select second tag', () => {
	expect(suggestionActive(0)(el)).toBe(false);
	expect(suggestionActive(1)(el)).toBe(true);
	expect(suggestionActive(2)(el)).toBe(false);
});

function compose(...args) {
  const fns = arguments;
  return function (result) {
    for (let i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result);
    }
    return result;
  };
};
