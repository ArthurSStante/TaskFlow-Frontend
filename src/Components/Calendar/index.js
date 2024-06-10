import React from "react";
import { Calendar, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/pt-br";
import ptBR from "antd/lib/locale/pt_BR";
import "./DateRangeCalendarCalendarsProp.css";

moment.locale("pt-br");

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const DateRangeCalendarCalendarsProp = () => {
  return (
    <ConfigProvider locale={ptBR}>
      <div className="custom-calendar-wrapper">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </ConfigProvider>
  );
};

export default DateRangeCalendarCalendarsProp;
