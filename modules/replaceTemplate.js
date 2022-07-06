function replaceTemplate(tempHTML, data) {
    let card = tempHTML.replace(/{%IMAGE%}/g, data.image);
    card =  card.replace(/{%NAME%}/g, data.productName);
    card =  card.replace(/{%QUANTITY%}/g, data.quantity);
    card =  card.replace(/{%PRICE%}/g, data.price);
    card =  card.replace(/{%id%}/g, data.id);
    card =  card.replace(/{%LOCATION%}/g, data.from);
    card =  card.replace(/{%LOCATION%}/g, data.from);
    card =  card.replace(/{%NUTRIENTS%}/g, data.nutrients);
    card =  card.replace(/{%DESCRIPTION%}/g, data.description);

    if (!data.organic) card =  card.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    
    return card;
}   

module.exports  = replaceTemplate;