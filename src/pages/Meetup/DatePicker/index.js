import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', pt);

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        placeholderText={placeholder}
        name={fieldName}
        showTimeSelect
        minDate={new Date()}
        timeIntervals={30}
        locale="pt-BR"
        dateFormat="dd/MM/yy HH:mm"
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
