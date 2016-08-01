
/**
* Handles the authentication.
*/
var authService = {

  _attr: {
    token: 'auth_token',
    user: 'email',
    name: 'name',
    group: 'user_group'
  },

  authorizeUser: function (user) {
    localStorage.setItem(this._attr.token, user.token);
    localStorage.setItem(this._attr.group, user.group);
    localStorage.setItem(this._attr.name, user.name);
    localStorage.setItem(this._attr.user, user.email);
  },

  /**
  * Gets current session, if not set up, redirects to login page.
  */
  getCurrentSession: function () {
    if (this.isLoggedIn()) {
      this.logout();
    }

    var _usr = {
      name: localStorage.getItem(this._attr.name),
      email: localStorage.getItem(this._attr.email),
      group: localStorage.getItem(this._attr.group)
    };

    return _usr;
  },

  isLoggedIn: function () {
    var _token = localStorage.getItem(this._attr.token);
    return _token !== undefined && _token !== null;
  },

  logout: function () {
    localStorage.clear();
    window.location = '/login';
  }
};
