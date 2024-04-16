import Button from "../../components/atoms/Button/Button";
import Description from "../../components/atoms/Description/Description";
import Title from "../../components/atoms/Title/Title";
import "./Calendar.scss";

//Assets
import CalendarImg from "../../assets/images/calendar.png";

const Calendar = () => {
    return (
        <div className="Calendar">
            <div className="cal-left">
                <div className="stain"></div>
                <img src={CalendarImg} alt="" className="cal_img" />
            </div>
            <div className="cal-right">
                <Title title="24-hour, 7-day accessibility." />
                <div className="cnt_desc">
                    <Description>
                        Your website is always available, allowing customers to
                        access information about your services at any time, from
                        anywhere.
                    </Description>
                    <Button text="Start" />
                </div>
            </div>
        </div>
    );
};

export default Calendar;
