document.getElementById('change-display').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const currentFlexDirection = window.getComputedStyle(container).flexDirection;

    if (currentFlexDirection === 'row') {
        container.style.flexDirection = 'column';
        console.log('Flex direction changed to column');
    } else {
        container.style.flexDirection = 'row';
        console.log('Flex direction changed to row');
    }
});
