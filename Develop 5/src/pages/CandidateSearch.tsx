import { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate>({
    login: "",
    avatar_url: "",
    name: "",
    html_url: "",
    company: "",
    location: "",
    email: "",
    hireable: "",
    bio: "",
  });

  useEffect(() => {
    const fetchUser = async (username: string) => {
      searchGithubUser(username).then((data) => {
        console.log(data);
        setCandidate(data);
      });
    };

    const fetchData = async () => {
      const data = await searchGithub();
      // console.log(data);
      setCandidates(data);
      fetchUser(data[0].login);
    };
    fetchData();
  }, []);

  // write a function to save a candidate
    // save candidate to local storage
    // get next candidate
  // write a function to skip a candidate
    // get next candidate

  return (
    <div>
      <h1>Candidate Search</h1>
      <article>
        <img src={candidate.avatar_url} alt={candidate.name} />
        <h2>{candidate.name}</h2>
        <p>{candidate.login}</p>
      </article>

<button onClick={}
</button>

    </div>

  );
}

export default CandidateSearch;
