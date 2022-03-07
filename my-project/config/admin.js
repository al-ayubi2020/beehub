module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dff879ee877bb5e8b4b593e8b0c85eb5'),
  },
});
