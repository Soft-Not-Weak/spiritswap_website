import { useState, useMemo, useEffect } from "react";
import differenceInSeconds from "date-fns/differenceInSeconds";

const Timer = ({deadline, className}) => {
	const ONE_DAY = 60 * 60 * 24;
	const ONE_HOUR = 60 * 60;
	const ONE_MINUTE = 60;
	const [currentTime, setCurrentTime] = useState(new Date().getTime());

	const diffInSeconds = differenceInSeconds(deadline, currentTime);

	const getCoundown = () => {
		if (diffInSeconds <= 1) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
		}
		const days = Math.floor(diffInSeconds / ONE_DAY);
		const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
		const minutes = Math.floor(
		(diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
		);
		const seconds =
		diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
		return {
		days,
		hours,
		minutes,
		seconds
		};
	};

	const countdown = useMemo(getCoundown, [currentTime]);

	useEffect(() => {
		setInterval(() => {
		  const now = new Date().getTime();
		  setCurrentTime(now);
		}, 1000);
	  }, []);

	if (countdown.days > 1) 
	{
		return (
			<p className={`${className} text-3xl italic`}>
				{countdown.days} Days to go!
			</p>
		)
	}

	return (
		<p className={`${className} text-4xl italic`}>
			<span className="text">Last Day!</span><br/>
			{countdown.hours > 0 && <span>{countdown.hours}:</span>}
			{countdown.minutes.toLocaleString(undefined, {minimumIntegerDigits: 2})}:
			{countdown.seconds.toLocaleString(undefined, {minimumIntegerDigits: 2})}
		</p>
	)
	
}
export default Timer;