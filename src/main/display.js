$(function() {
    displayData(data);  

    $("#searchInput").on("keyup", debounce(e => {
        var searchValue = $("#searchInput").val();

        clearSearchResults();
        var matches;
        if (searchValue) {
            matches = performDescriptionSearch(searchValue);
            displaySearchResults(matches);
        }

    }, 500));

    $("#searchInput").on("change", () => {

        var searchValue = $("#searchInput").val();
        if (!searchValue) {
            clearSearchResults();
        }
    });

    $("#clearSearchInput").on("click", clearSearchInput);

    $("#showCreateDialog").on("click", showCreateDialog);

    $("#createDialog").on("close", (e) => {
        var returnValue = e.currentTarget.returnValue;

        if (returnValue == "save") {
            saveCreateDialog();
        } else if (returnValue == "cancel") {
            cancelCreateDialog();
        }
    });
});

function showCreateDialog(e) {
    const sectionIdList = Object.keys(data.sections);
    const $createDialog = $("#createDialog");

    const $createDialogSectionInput = $createDialog.find("#sections");

    $createDialogSectionInput.empty();
    sectionIdList.forEach(sectionId => {
        const section = data.sections[sectionId];
        $createDialogSectionInput.append($("<option>")
            .attr("value", sectionId)
            .html(section.title));
    });

    $createDialog[0].showModal();
    
    
}

function saveCreateDialog() {
    const $createDialog = $("#createDialog");
    const description = $createDialog.find("#description").val();
    const sections = $createDialog.find("#sections").val();
    const normalBinding = $createDialog.find("#normalModeBinding").val();
    const insertBinding = $createDialog.find("#insertModeBinding").val();
    const visualBinding = $createDialog.find("#visualModeBinding").val();
    const exCommandBinding = $createDialog.find("#exCommandModeBinding").val();
    const visualInsertBinding = $createDialog.find("#visualInsertModeBinding").val();

        if (description && sections && sections.length 
            && (normalBinding || insertBinding || visualBinding || exCommandBinding || visualInsertBinding)) {

        add(binding(s(...sections),d(description),n(normalBinding),i(insertBinding),v(visualBinding),ex(exCommandBinding),vi(visualInsertBinding)));
    }
}

function cancelCreateDialog() {

}

function performDescriptionSearch(descriptionValue) {
    const searchValue = descriptionValue.toLowerCase();

    var matches = data.content.filter((value) => {
        const valueDescription = value.description;
        return value.description.toLowerCase().includes(searchValue); 
    });

    return matches;
}

function clearSearchInput() {
    $("#searchInput").val("").trigger("change");
}

function clearSearchResults() {
    $("#searchResults").empty();
}

function displaySearchResults(matches) {
    const $searchResultsList = $("#searchResults");
    if (matches && matches.length) {
        var contentList = matches.map((value) => {
            return $("<li>").append(createContentDisplay(value));
        });

        $searchResultsList.append(contentList);
    } else {
        $searchResultsList.append($("<li>No results</li>"));
    }
}

function debounce(callback, wait) {
  let timeout;
  return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(function () { callback.apply(this, args); }, wait);
  };
}

function clearData() {
    const $nav = $("#index").empty();
    const $content = $("#content").empty();
}

function refreshData() {
    clearData();
    displayData(data);
}

function displayData(data) {
    const $body = $("body");
    const $nav = $("#index");
    const $content = $("#content");
    const $navList = $("<ul>");
    $.each(data.sections, (key, section) => {
        var $listContent = generateListContent(key, section);
        $navList.append($listContent);

        var $parentElement;
        var headerType;
        if ("parent" in section) {
            $parentElement = $("#" + section.parent);
            headerType = "h3";
        } else {
            $parentElement = $content;
            headerType = "h2";
        }
        var $section = $("<section/>")
            .attr("id", key)
            .attr("name", key)
            .append($("<" + headerType + "/>")
                .text(section.title))
            .append($("<div/>").addClass("content"));
        $section.hide();
        $parentElement.append($section);
    });
    $nav.append($navList);

    $.each(data.content, (key, content) => {
        var $content = createContentDisplay(content);
        appendToSections(content.sections, $content);
    })
}

function createContentDisplay(content) {
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
    return $content;
}

function generateListContent(key, section) {

    var $listElement = $("<li/>").append($("<p/>").text(("parent" in section ? " > " : "") + section.title));
    $listElement.click(function() {
        $("#index li").removeClass("selected");
        showSection(key); 
        $(this).addClass("selected");
    });
    var $ListElementContent;

    if (section.link || section.text) {
        $listElementContent = $("<div/>").addClass("additionalContent");
        if (section.link) {
            var $link = $("<a/>").attr("href", section.link).attr("target", "_blank");
            $link.text("Further Information");
            $listElementContent.append($link);
        }
        if (section.text) {
            $listElementContent.append($("<p/>").text(section.text));
        }
        $listElement.append($listElementContent);
    }   
    return $listElement;
}

function showSection(key) {
    $("#content section").hide();
    var $section = $("#content #"+key);
    $section.parent("section").show();
    $section.show();
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
            var $section = $("#" + section + " > .content");
            if (section.length) {
                $section.append($content.clone());
            } else {
                console.warn("Section '" + section + "' not found");
            }
        }) 
    }
}

