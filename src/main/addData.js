function s() {
    validateSections(arguments);
    return {"sections": Array.from(arguments)};
}

function validateSections(args) {
    for (let i = 0; i < args.length; i++) {
        if (!(args[i] in data.sections)) {
            throw args[i] + " is not a valid section. Sections are " + Object.keys(data.sections);
        }
    }
}

function validateAllDataSections() {
    let i = 0;
    for (; i < data.content.length; i++) {
        validateSections(data.content[i].sections);
    }

    console.log("Validated " + i + " sections successfully");
}

function validateMapping(binding) {
    const type = Object.keys(binding)[0];

    for (let i = 0; i < data.content.length; i++) {
        let currentBinding = data.content[i];
        let currentBindingType = currentBinding[type];
        for (let j = 0; j < currentBindingType.length; j++) {
            for (let k = 0; k < binding[type].length; k++) {
                if (currentBindingType[j] == binding[type][k]) {
                    throw "Binding '" + binding[type][k] + "' for type '" + type + "' already defined in binding '" + currentBinding.description + "' (" + i + "/" + data.content.length + "). \n" + JSON.stringify(currentBinding);
                }
            }
        }
    }
}

function find(binding) {
    const type = Object.keys(binding)[0];
    const result = [];
    for (let i = 0; i < data.content.length; i++) {
        let currentBinding = data.content[i];
        let currentBindingType = currentBinding[type];
        if (!currentBindingType) {
            throw "Unabled to find binding type " + type + " on " + JSON.stringify(currentBinding);
        }
        for (let j = 0; j < currentBindingType.length; j++) {
            for (let k = 0; k < binding[type].length; k++) {
                if (currentBindingType[j] == binding[type][k]) {
                    result.push(currentBinding);
                }
            }
        }
    }
    console.log(JSON.stringify(result));
}

function d() {
    let description = arguments[0];
    description = description.charAt(0).toUpperCase() + description.slice(1);
    return {description: description};
}

function n() {
    let mapping = {normalMode: Array.from(arguments).filter(filterValue)};
    return mapping;
}

function i() {
    let mapping = {insertMode: Array.from(arguments).filter(filterValue)};
    return mapping;
}

function v() {
    let mapping = {visualMode: Array.from(arguments).filter(filterValue)};
    return mapping;
}

function ex() {
    let mapping = {exCommand: Array.from(arguments).filter(filterValue)};
    return mapping;
}

function vi() {
    let mapping = {visualInsertMode: Array.from(arguments).filter(filterValue)};
    return mapping;
}

function filterValue(value) {
    return value ? true : false;
}

function binding() {
    let binding = {
        sections: [],
        description: "",
        normalMode: [],
        insertMode: [],
        visualMode: [],
        exCommand: [],
        visualInsertMode: []
    };

    let result = binding;

    for (let i = 0; i < arguments.length; i++) {
        let type = Object.keys(arguments[i])[0];
        if (type != "description" && type != "sections") {
           validateMapping(arguments[i]);
        }
        result = {...result, ...arguments[i]};
    }

    if (!result.description) {
        throw "Description is required";
    }

    return result;
}

function add(binding) {
    data.content.push(binding);
    console.clear();
    console.log("var data = " + JSON.stringify(data));
    refreshData();
}

console.log('add(binding(s(""),d(""),n(),i(),v(),vi(),ex()));');
console.log("find(/*binding method*/);");
