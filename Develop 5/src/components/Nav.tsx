const Nav = () => {
 
  return (
    <nav>
      <div>Home</div>
      <a href="/SavedCandidates" onClick={() => window.location.href = "/SavedCandidates"}>
        Potential Candidates
      </a>
    </nav>
    
  )
};

export default Nav;

// TODO: Add necessary code to display the navigation bar and link between the pages