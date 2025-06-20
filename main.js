let blocksLocation = {}
$(document).ready(() => {
    $('.main-container .title-container h1').addClass('remove-blur');
    $('.main-container .title-container h2').addClass('remove-opacity');
    const container = $('#scrollContainer');

    blocksLocation = [
        {
            blockId: '#portada',
            location: $('#portada').offset().top - container.offset().top,
        },
        {
            blockId: '#sinopsis',
            location: $('#sinopsis').offset().top - container.offset().top,
        },
        {
            blockId: '#autor',
            location: $('#autor').offset().top - container.offset().top,
        },
        {
            blockId: '#venta',
            location: $('#venta').offset().top - container.offset().top,
        }
    ];
    container.on('scroll', () => {
        checkScrollPosition()
    });
});


function checkScrollPosition()
{
    const actualScroll = $('#scrollContainer').scrollTop();
    const actualBlock = blocksLocation.filter(el => parseFloat(actualScroll) >= parseFloat(el.location)-100);
    if (!actualBlock) {
        return false;
    }
    
    actualBlock.forEach((block) => {
        $(block.blockId).addClass('remove-opacity');
    });
}