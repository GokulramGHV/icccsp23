const items = [
  { date: ['20', 'th', ' June 2022'], event: 'Paper Submission Opens from' },
  {
    date: ['Submission Closed'],
    event: 'Paper Submission Deadline',
  },
  { date: ['15', 'th', ' Nov 2022'], event: 'Acceptance Notification Starts' },
  { date: ['7', 'th', ' Dec 2022'], event: 'Early Bird Registration' },
  { date: ['10', 'th', ' Dec 2022'], event: 'Camera-ready Copy Submission' },
  { date: ['4', 'th', ' Jan 2023'], event: 'Pre-Conference Workshop' },
  { date: ['5 - 6', 'th', ' Jan 2023'], event: 'Conference ' },
];

export default function ImportantDates() {
  return (
    <div id="important_dates" className="importantDatesContainer">
      <h1 className="text-center">
        <b>IMPORTANT DATES</b>
      </h1>
      <table>
        <tr>
          <th>EVENT</th>
          <th>Date</th>
        </tr>

        {items.map((item, idx) => (
          <tr key={item.event}>
            <td>{item.event}</td>
            <td>
              {idx === 1 && (
                <>
                  <span>
                    <s>
                      10<sup>th</sup> Sept
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                  <span>
                    <s>
                      10<sup>th</sup> Oct
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                  <span>
                    <s>
                      21<sup>th</sup> Oct
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                  <span>
                    <s>
                      10<sup>th</sup> Nov
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                </>
              )}
              {idx === 2 && (
                <>
                  <span>
                    <s>
                      15<sup>th</sup> Oct
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                  <span>
                    <s>
                      30<sup>th</sup> Oct
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                </>
              )}
              {idx === 3 && (
                <>
                  <span>
                    <s>
                      15<sup>th</sup> Nov
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                  <span>
                    <s>
                      30<sup>th</sup> Nov
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                </>
              )}
              {idx === 4 && (
                <>
                  <span>
                    <s>
                      30<sup>th</sup> Nov
                    </s>{' '}
                    &nbsp;&nbsp;
                  </span>
                </>
              )}
              <p className={[1, 2, 3].includes(idx) ? 'red-text' : ''}>
                {item.date[0]}
                <sup>{item.date[1]}</sup>
                {item.date[2]}
              </p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
