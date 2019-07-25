$(function() {
    displayData(data);  
});

function displayData(data) {
    const $body = $("body");
    const $nav = $("#index");
    const $content = $("#content");
    const $navList = $("<ul>");
    $.each(data.sections, (key, section) => {
        $navList.append($("<li>").append($("<a>")
            .attr("href", "#"+key)
            .text(section.title)));
        $content.append($("<section/>")
            .attr("id", key)
            .attr("name", key)
            .append($("<h2>")
                .text(section.title)));
    });
    $nav.append($navList);

    $.each(data.content, (key, content) => {
        const $content = $("<div/>")
            .attr("class", "bindingContainer");
        $content.append($("<div/>")
            .attr("class", "functionDescription")
            .text(content.description));
        $content.append(displayBinding(content.normalMode));
        $content.append(displayBinding(content.insertMode));
        $content.append(displayBinding(content.exCommand));
        $content.append(displayBinding(content.visualMode));
        //$content.append(displayBinding(content.visualInsertMode));
        appendToSections(content.sections, $content);
    })
}

function displayBinding(binding) {
    let result;
    result = $("<div/>").attr("class", "keybinding");
    if (binding && binding.length) {
        binding.forEach((value, i) => {
            result.append($("<kbd/>")
                .text(value));
        });
    } else {
        result.html("&nbsp;");
    }
    return result;
}

function appendToSections(sections, $content) {
    if (sections && sections.length && content) {
        sections.forEach((section, i) => {
            var $section = $("#" + section);
            if (section.length) {
                $section.append($content.clone());
            } else {
                console.warn("Section '" + section + "' not found");
            }
        }) 
    }
}
