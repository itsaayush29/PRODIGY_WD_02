let timer;
        let isRunning = false;
        let seconds = 0, minutes = 0, hours = 0;

        function startPause() {
            if (isRunning) {
                clearInterval(timer);
                document.querySelector('button').innerText = 'Start';
            } else {
                timer = setInterval(updateDisplay, 1000);
                document.querySelector('button').innerText = 'Pause';
            }

            isRunning = !isRunning;
        }

        function reset() {
            clearInterval(timer);
            isRunning = false;
            seconds = 0;
            minutes = 0;
            hours = 0;
            updateDisplay();
            document.querySelector('button').innerText = 'Start';
        }

        function updateDisplay() {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;

                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }

            const display = document.getElementById('display');
            display.innerText = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
        }

        function pad(value) {
            return value < 10 ? '0' + value : value;
        }