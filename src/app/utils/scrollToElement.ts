export function scrollToElement(element: any) {
    element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
}
