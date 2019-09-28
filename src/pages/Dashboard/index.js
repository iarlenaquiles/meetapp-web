import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Container, Meetup } from './styles';
import formatDate from '~/util/formatDate';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      response.data.map(item => {
        item.formattedDate = formatDate(item.date);
        return item;
      });
      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  function handleNewMeetup() {}

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup">
          <button type="button" onClick={handleNewMeetup}>
            <MdAddCircleOutline color="#fff" size={20} />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={String(meetup.id)} past={meetup.past}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.formattedDate}</span>
              <MdChevronRight size={20} color="#fff" />
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
