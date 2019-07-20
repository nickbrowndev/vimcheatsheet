$(function() {
  displayData(data);  
});

function displayData(data) {
    const $body = $("body");
    const $nav = $("#index");
    const $content = $("#content");
    $.each(data.sections, (key, section) => {
        $nav.append($("<a>")
        .attr("href", "#"+key)
        .text(section.title));
        $content.append($("<section/>")
        .attr("id", key)
            .append("<h2>")
            .attr("name", key)
            .text(section.title));
    });
    $.each(data.content, (key, content) => {
        const $content = $("<div/>");
        $content.append("<div/>").text(content.description);
        $content.append(displayBinding(content.normalMode));
        $content.append(displayBinding(content.insertMode));
        $content.append(displayBinding(content.visualMode));
        $content.append(displayBinding(content.visualInsertMode));
        appendToSections(content.sections, $content);
    })
}

function displayBinding(binding) {
    let result;
    if (binding && binding.length) {
        result = $("<div/>");
        binding.forEach((value, i) => {
            result.append("<kbd/>")
            .text(value);
        });
    }
    return result;
}

function appendToSections(sections, $content) {
    if (sections && sections.length && content) {
       sections.forEach((section, i) => {
            $("#"+section).append($content.clone());
       }) 
    }
}
