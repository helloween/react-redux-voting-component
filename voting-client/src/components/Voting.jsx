import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Vote from './Vote';
import Winner from './Winner';

export default React.createClass({
  mixins: [PureRenderMixin],

  getPair: function() {
    return this.props.pair || [];
  },

  isDisabled: function () {
    return !!this.props.hasVoted;
  },

  hasVotedFor: function (entry) {
    return this.props.hasVoted === entry;
  },

  render: function() {
    return <div>
      {this.props.winner ? <Winner ref="winner"/> : <Vote pair="this.props.pair" hasVoted="this.props.hasVoted"/>}
    </div>;
  }
});