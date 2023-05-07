const About = () => {
  return (
    <div
      style={{
        padding: '5rem',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.2rem',
      }}
    >
      <h1>About</h1>
      <p>
        This website uses the{' '}
        <a href="https://www.openbrewerydb.org/documentation">
          Open Brewery DB API
        </a>{' '}
        to display information about breweries around the world. You can search
        for a specific brewery by name and view its details, or browse all
        breweries using the pagination feature. We hope you find this website
        helpful and informative!
      </p>
      <p>
        Each brewery is displayed with a picture and basic information such as
        name, type, and address. Users can click on a brewery to view more
        detailed information such as the phone number, website, and rating. The
        website is designed to be responsive, so it can be easily viewed on any
        device, including mobile phones and tablets.
      </p>
    </div>
  );
};

export default About;
