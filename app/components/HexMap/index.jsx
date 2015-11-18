import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';


class HexMap extends Component {

  getCoordsCcgMap () {
    return {
      1: { 5: '10L' },
      10: { 10: '08K', 12: '08A', 14: '09J', 2: '11T', 4: '10W', 6: '08P', 8: '08R' },
      11: { 11: '08Q', 13: '07L', 15: '07G', 3: '11E', 5: '10T', 7: '08C', 9: '08X' },
      12: { 10: '07T', 12: '08M', 14: '08F', 16: '99F', 2: '11H', 4: '10C', 6: '07Y', 8: '08Y' },
      13: { 11: '08V', 13: '08N', 15: '99E', 3: '12A', 5: '10H', 7: '07W', 9: '09A' },
      14: { 10: '07R', 12: '08W', 14: '06Q', 16: '99G', 4: '12D', 6: '08G', 8: '07P' },
      15: { 11: '08H', 13: '07H', 15: '06L', 3: '11M', 5: '10Y', 7: '08E', 9: '07M' },
      16: { 10: '08D', 12: '07K', 14: '06M', 2: '05F', 4: '10Q', 6: '06N', 8: '06K' },
      17: { 11: '06P', 13: '06H', 15: '06Y', 3: '05T', 5: '04G', 7: '06F', 9: '07X' },
      18: { 10: '03V', 12: '99D', 14: '06W', 2: '06D', 4: '05R', 6: '05A', 8: '04F' },
      19: { 11: '04Q', 13: '07J', 15: '06V', 3: '05J', 5: '05P', 7: '05H', 9: '04C' },
      20: { 10: '03W', 12: '03T', 4: '04X', 6: '13P', 8: '04N' },
      21: { 11: '04D', 3: '05C', 5: '05Y', 7: '04V', 9: '04H' },
      22: { 10: '04L', 2: '05N', 4: '05L', 6: '05Q', 8: '04M' },
      23: { 11: '03H', 3: '05X', 5: '06A', 7: '03X', 9: '04K' },
      24: { 10: '03K', 2: '02F', 4: '05V', 6: '05D', 8: '04R' },
      25: { 3: '01R', 5: '04Y', 7: '03Y', 9: '02Q' },
      26: { 10: '02Y', 2: '12F', 4: '05G', 6: '05W', 8: '04E' },
      27: { 3: '02D', 5: '01C', 7: '03N', 9: '02X' },
      28: { 10: '03F', 2: '99A', 4: '02E', 6: '04J', 8: '03L' },
      29: { 1: '01T', 3: '01F', 5: '01N', 7: '02P', 9: '03Q' },
      30: { 2: '01J', 4: '02A', 6: '01W', 8: '03R' },
      31: { 1: '01V', 3: '01X', 5: '00W', 7: '03A', 9: '03G' },
      32: { 10: '03M', 2: '02G', 4: '01G', 6: '01Y', 8: '03J' },
      33: { 1: '01E', 3: '02H', 5: '01M', 7: '02T', 9: '02V' },
      34: { 2: '00X', 4: '00T', 6: '00Y', 8: '03C' },
      35: { 1: '02M', 3: '01A', 5: '00V', 7: '02R', 9: '03E' },
      36: { 2: '00Q', 4: '00J', 6: '01D', 8: '02W' },
      37: { 1: '00R', 3: '02N', 5: '00D', 7: '03D' },
      38: { 2: '01K', 4: '13T', 6: '00C', 8: '00M' },
      39: { 3: '01H', 5: '00N', 7: '00K' },
      4: { 16: '09P', 2: '99Q', 4: '11A' },
      40: { 6: '00P' },
      41: { 5: '00L' },
      5: { 1: '11N', 13: '09D', 15: '09F', 17: '10A', 3: '11J', 5: '10K', 7: '10V', 9: '09G' },
      6: { 10: '09N', 12: '09H', 14: '99K', 16: '09C', 18: '10E', 2: '99P', 4: '10X', 6: '10R', 8: '99M' },
      7: { 11: '09Y', 13: '09X', 15: '99J', 17: '09E', 3: '11X', 5: '10N', 7: '10J', 9: '10C' },
      8: { 10: '07Q', 12: '99H', 14: '09L', 16: '10D', 4: '10M', 6: '10G', 8: '08T' },
      9: { 11: '08L', 13: '07N', 15: '09W', 3: '99N', 5: '11D', 7: '08J', 9: '07V' }
    };
  }

  getCcg (map, row, col) {
    if (row in map && col in map[row]) {
      return map[row][col];
    }
    return null;
  }

  getStatus (ccg) {
    if (ccg === null || ccg === undefined) {
      return 0;
    } else if (ccg.indexOf('G') > -1) {
      return 1;
    } else if (ccg.indexOf('J') > -1) {
      return 2;
    } else if (ccg.indexOf('H') > -1) {
      return 3;
    } else if (ccg.indexOf('I') > -1) {
      return 4;
    } else if (ccg.indexOf('K') > -1) {
      return 5;
    } else if (ccg.indexOf('L') > -1) {
      return 6;
    } else if (ccg.startsWith('0')) {
      return 7;
    } else if (ccg.startsWith('1')) {
      return 8;
    } else {
      return 9;
    }
  }

  render() {
    const width = 18;
    const height = 22;
    const hexagons = [];
    const coordsCcgMap = this.getCoordsCcgMap();
    for (var y = height - 1; y >= 0; y--) {
      const rowContents = [];
      for (var x = 0; x < width; x++) {
        const row =
          x % 2 === 0
          ? (2 * y) + 1
          : (2 * y)
        const col = x + 1;
        const ccg = this.getCcg(coordsCcgMap, row, col);
        const statusClass = 'status-' + this.getStatus(ccg);
        const parityClass =
          x % 2 === 0
          ? ''
          : 'even';
        const hexClass = 'hex' + ' ' + statusClass + ' ' + parityClass;
        const key = y + '-' + x;
        const hexagon =
          <div className={hexClass} key={key}>
            <div className='left'></div>
            <div className='middle'>
              <span>{ccg}</span>
            </div>
            <div className='right'></div>
          </div>;
        rowContents.push(hexagon);
      }
      const rowKey = 'row-' + y;
      const row =
        <div className='hex-row' key={rowKey}>
          {rowContents}
        </div>;
      hexagons.push(row);
    }

    return (
      <div className='HexMap'>
        <div className='HexMap-container'>
          <div className='map'>
            {hexagons}
          </div>
        </div>
      </div>
    );
  }

}

export default HexMap;
