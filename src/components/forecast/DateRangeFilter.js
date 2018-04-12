import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DateRange from 'material-ui/svg-icons/action/date-range';
import { grey500 } from 'material-ui/styles/colors';

const styles = {
  container: {
    marginTop: 20,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  iconStyles: {
    marginRight: 0,
  }
};

class DateRangeFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { range, onChange } = this.props;
    return (
      <div style={styles.container}>
        <div style={{display: 'flex', alignItems: 'flex-end', paddingBottom: 5}}>
          <DateRange color={grey500} />
        </div>
        <DropDownMenu value={range} onChange={(e, i, value) => onChange(value)}>
          <MenuItem value="6M" primaryText="6 Months" />
          <MenuItem value="6W" primaryText="6 Weeks" />
          <MenuItem value="6D" primaryText="6 Days" />
        </DropDownMenu>
      </div>
    );
  }
}

DateRangeFilter.propTypes = {
  range: PropTypes.string,
  onChange: PropTypes.func
};

export default DateRangeFilter;
