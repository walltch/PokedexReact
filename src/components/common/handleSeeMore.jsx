function handleSeeMore(setLoading, setOffset, limit, setVisibleCount) {
    return () => {
      setLoading(true);
      setTimeout(() => {
        setOffset((prevOffset) => prevOffset + limit);
        setVisibleCount((prevCount) => prevCount + limit);
      }, 1000);
    };
  }
  
  export default handleSeeMore;
  