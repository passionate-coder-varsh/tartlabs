import React from 'react'

const CountDownTimer = ({dayshoursMinSecs}) => {
   
    const { days=0, hours = 0, minutes = 0, seconds = 60 } = dayshoursMinSecs;
    const [[dys, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);
    

    const tick = () => {
   
        if (dys === 0 && hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([dys-1, hrs, 59, 59]);
        } else if (mins === 0 && secs === 0) {
            setTime([dys, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([dys, hrs, mins - 1, 59]);
        } else {
            setTime([dys, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>

            <div class="grid lg:grid-cols-4 pl-4 pt-3">

                <ul>

                    <li class="inline-block cols-span-1 row-span-2"><p>{`${dys.toString().padStart(2, '0')}`}{"  :  "}</p></li>
                    <li class="inline-block cols-span-1 row-span-2"><p>{`${hrs.toString().padStart(2, '0')}`}{"  :  "}</p></li>
                    <li class="inline-block cols-span-1 row-span-2"><p>{`${mins.toString().padStart(2, '0')}`}{"  :  "}</p></li>
                    <li class="inline-block cols-span-1 row-span-2"><p>{`${secs.toString().padStart(2, '0')}`}{"  "}</p></li>

                    <li class="cols-span-1 text-sm font-thin">Days        Hours      Minutes     Seconds</li>

                </ul>

            </div>


        </div>
    );
}

export default CountDownTimer;