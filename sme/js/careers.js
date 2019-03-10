$(document).ready(function () {
    renderRows();
});

function renderRows() {
    $.ajax({
        type: "GET",
        url: "careers.csv",
        dataType: "text",
        success: function (response) {
            const rows = $.csv.toObjects(response);
            rows.forEach(row => {
                $('#careers-positions').append(renderRow(row))
            })
        }
    });
}

// for each element of row, add p tags
// append each of those to the main container
// if more info, add expand button
// add email button
// if mobile, remove position and clearance (this might be done with css display none)

let winWidth = isMobile();

$(window).on('resize', function () {
    if (winWidth != isMobile()) {
        winWidth = isMobile();
        deleteRows();
        renderRows();
    }
});

function deleteRows(row) {
    $('.position').remove();
}

function renderRow(row) {
    var container = $('<div></div>').addClass('position');
    const allKeys = Object.keys(row);
    var renderedKeys = ['Position'];
    if (!isMobile()) {
        renderedKeys = [...renderedKeys, 'Location', 'Clearance'];
    }
    const renderedRows = renderedKeys.map(k => $('<p></p>').append(row[k]));
    container.append(renderedRows);
    const buttons = $('<div id="buttons"></div>');
    const otherRows = filterObjectByKeys(
        row,
        k => !renderedKeys.includes(k) && row[k] != ''
    );
    if (Object.keys(otherRows).length > 1) {
        // indicate that this row is clickable
        container.addClass('clickable');
        // show expand button
        buttons.append('<img src="img/expand-01.svg" alt="expand" class="button-expand">');
        // on click, render modal
        container.click(() => renderModal(row, otherRows));
    }
    // show email button
    if (!isMobile()) {
        buttons.append('<a href="mailto:careers@strategicmissionelements.com?subject=' + row['JobID'] + '" target="_blank"><img src="img/expand-03.svg" alt="email" class="button-email"></a>')
    }
    container.append(buttons);
    return container;
    //    $('#careers-positions').append(container);
}

function filterObjectByKeys(obj, predicate) {
    return Object
        .keys(obj)
        .reduce(
            (result, k) => ({
                ...result,
                ...(
                    predicate(k) ? {
                        [k]: obj[k]
                    } : {}
                )
            }), {}
        )
}

// when mobile, only show title
// when tablet/desktop, show title, location, clearance
// if row has non-empty other cols (not shown in main view)
// then show expand button and enable expand-to-modal

// if click and is-expandable
// then create modal thing

function getKeys() {
    const keys = ['Position'];
    return isMobile() ? keys : [...keys, 'Location', 'Clearance'];
}

function isMobile() {
    return ($(window).width() < 1024);
}

function deleteModal() {
    $('#career-modal-container').remove();
    $('body').css('overflow', 'auto');
}

function renderModal(row, otherRows) {
    $('body').css('overflow', 'hidden');
    const container = $('<div id="career-modal-container"></div>').click(deleteModal);
    const modal =
        $('<div id="career-modal"></div>').click(function (e) {
            e.stopPropagation();
        });
    modal.append(renderHeader(row));
    const positionInformation = $('<div id="position-information"></div>');
    const roleDescription = $('<div class="position-section description"></div>');

    const jobID = $('<p><span>JOB ID: </span> </p>').append(otherRows['JobID']);
    // ROLE DESCRIPTION
    if (isMobile()) {
        const location = $('<p><span>Location: </span> </p>').append(row['Location']);
        const clearance = $('<p><span>Clearance: </span> </p>').append(row['Clearance']);
        roleDescription.append(location);
        roleDescription.append(clearance);
        roleDescription.append(jobID);
    }
    if (otherRows.hasOwnProperty('RoleDescription')) {
        // console.log(row);
        const roleDescriptionValue = $('<p></p>').append(otherRows['RoleDescription']);
        const roleDescriptionHeader = $('<h6>Role Description</h6>');
        roleDescription.append(roleDescriptionHeader);
        roleDescription.append(roleDescriptionValue);
        if (!isMobile()) {
            roleDescription.append(jobID);
        }
    }
    positionInformation.append(roleDescription);
    // CTA
    const cta = $('<div id="modalCTA" class="position-section border-grey content-container"><h5>Interested in this position?</h5><p>Send us an email with the Job ID as the subject, and attach your resume, optional cover letter, and any other relevant documents.</p><a href="mailto:careers@strategicmissionelements.com?subject=Interested in Job ' + otherRows['JobID'] + '" target="_blank"><button class="button-teal button-center"><p>SEND YOUR RESUME</p><div class="arrow-full arrow-teal arrow-sm"><div class="arrow-line"></div><div class="arrow-head"></div></div></button></a></div>');
    positionInformation.append(cta);
    // PARSE BASICQUAL for bullets
    if (otherRows.hasOwnProperty('BasicQualifications')) {
        const basicQualificationsContainer = $('<div id="basicQualificationsContainer" class="position-section"><h6>Basic Qualifications</h6></div>');
        const basicQualifications = $('<ul></ul>').attr('id', 'basicQualifications');
        const fullStr = otherRows['BasicQualifications'];
        const splitStr = fullStr.split('*').slice(1);
        $.each(splitStr, function (key, value) {
            basicQualifications.append('<li>' + value + '</li>');
        });
        basicQualificationsContainer.append(basicQualifications);
        positionInformation.append(basicQualificationsContainer);
    }
    // PARSE ADDQUAL for bullets
    if (otherRows.hasOwnProperty('BasicQualifications')) {
        const additionalQualificationsContainer = $('<div id="additionalQualificationsContainer" class="position-section"><h6>Additional Qualifications</h6></div>');
        const additionalQualifications = $('<ul></ul>').attr('id', 'additionalQualifications');
        const additionalFullStr = row['AdditionalQualifications'];
        const additionalSplitStr = additionalFullStr.split('*').slice(1);
        $.each(additionalSplitStr, function (key, value) {
            additionalQualifications.append('<li>' + value + '</li>');
        });
        additionalQualificationsContainer.append(additionalQualifications);
        positionInformation.append(additionalQualificationsContainer);
    }
    modal.append(positionInformation);
    container.append(modal);
    $('body').append(container);
}

function renderHeader(row) {
    var container = $('<div></div>').addClass('position');
    const allKeys = Object.keys(row);
    var renderedKeys = ['Position'];
    if (!isMobile()) {
        renderedKeys = [...renderedKeys, 'Location', 'Clearance'];
    }
    const renderedRows = renderedKeys.map(k => $('<p></p>').append(row[k]));
    container.append(renderedRows);
    const buttons = $('<div id="buttons"></div>');
    // for everything in renderedKeys, add to <p>
    // if (!isMobile()) render email button
    var otherKeys = allKeys.filter(k => !renderedKeys.includes(k));
    otherKeys = otherKeys.filter(k => row[k] !== '');
    if (otherKeys.length > 1) {
        container.addClass('clickable');
        // show expand button
        buttons.append('<img src="img/expand-02.svg" alt="expand" class="button-expand">');
        // on click, delete modal
        container.click(deleteModal);
    }
    // show email button
    if (!isMobile()) {
        buttons.append('<a href="mailto:careers@strategicmissionelements.com?subject=Interested in Job ' + row['JobID'] + '" target="_blank"><img src="img/expand-03.svg" alt="email" class="button-email"></a>')
    }
    container.append(buttons);
    return container;
}
