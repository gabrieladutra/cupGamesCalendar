function createGame(player1, hour, player2) {
    return `
		<li>
                        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
                        <strong>${hour}</strong>
                        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
                    </li>
`
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay +
        0.4;
    return `
		<div class="card" style="animation-delay: ${delay}s">
                <h2>${date}
                    <span>${day}</span>
                </h2>
                <ul>
                    ${games}
                </ul>
            </div>
		`
}
document.querySelector('#start_card').innerHTML = createCard('20/11', 'domingo',
    createGame('qatar', '13:00', 'ecuador'))
document.querySelector('#cards').innerHTML =


    createCard('21/11', 'segunda',
        createGame('england', '10:00', 'iran') +
        createGame('senegal', '13:00', 'netherlands') +
        createGame('usa', '16:00', 'wales')
    ) +

    createCard('22/11', 'terça',
        createGame('argentina', '07:00', 'arabia') +
        createGame('denmark', '10:00', 'tunisia') +
        createGame('mexico', '13:00', 'poland') +
        createGame('france', '16:00', 'australia')) +
    createCard('23/11', 'quarta',
        createGame('marocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada')) +
    createCard('24/11', 'quarta',
        createGame('marocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada')) +
    createCard('25/11', 'quarta',
        createGame('marocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada')) +
    createCard('26/11', 'quarta',
        createGame('marocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada')) +

    createCard('27/11', 'quarta',
        createGame('marocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada')) +

    createCard('28/11', 'quarta',
        createGame('marocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada')) +
    createCard('29/11', 'quarta',
        createGame('marocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada'))