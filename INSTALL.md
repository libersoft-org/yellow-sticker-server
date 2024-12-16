# Yellow - Sticker Server - installation and configuration

These are the installation instructions of this software for the different Linux distributions.

## 1. Server installation

Log in as "root" on your server and run the following commands to download the necessary dependencies and the latest version of this software from GitHub:

### Debian / Ubuntu Linux

```sh
apt update
apt -y upgrade
packages=("curl" "unzip" "git" "screen" "certbot")
for package in "${packages[@]}"; do
 if ! dpkg -s "$package" >/dev/null 2>&1; then
  apt -y install "$package"
 fi
done
if ! command -v bun >/dev/null 2>&1; then
 curl -fsSL https://bun.sh/install | bash
 source /root/.bashrc
fi
if ! dpkg -s mariadb-server mariadb-client >/dev/null 2>&1; then
 curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | bash
 apt -y install mariadb-server mariadb-client
fi
git clone https://github.com/libersoft-org/yellow-sticker-server.git
cd yellow-sticker-server/src/
```

### CentOS / RHEL / Fedora Linux

```sh
dnf -y update
packages=("curl" "unzip" "git" "screen" "certbot")
for package in "${packages[@]}"; do
 if ! rpm -q "$package" >/dev/null 2>&1; then
  dnf -y install "$package"
 fi
done
if ! command -v bun >/dev/null 2>&1; then
 curl -fsSL https://bun.sh/install | bash
 source /root/.bashrc
fi
if ! rpm -q mariadb-server mariadb-client >/dev/null 2>&1; then
 curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | bash
 dnf -y install mariadb-server mariadb-client
fi
git clone https://github.com/libersoft-org/yellow-sticker-server.git
cd yellow-sticker-server/src/
```

## 2. Set up the database

### Create MariaDB user and database:

Log in to MariaDB client as root:

```sh
mariadb -u root
```

... and create a new user

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
CREATE DATABASE yellow_sticker_server;
GRANT ALL ON yellow_sticker_server.* TO 'username'@'localhost';
```

## 3. Set up the server

### Create a new server settings file using:

```sh
./start.sh --create-settings
```

### Edit the configuration file "settings.json":

- **web** section:
  - **standalone** - true / false (**true** = run a standalone web server with a defined network ports, **false** = run it as a Unix socket and connect it through other web server's proxy)
  - **http_port** - your HTTP server's network port (ignored if you're not running a standalone server)
  - **https_port** - your HTTPS server's network port (ignored if you're not running a standalone server)
  - **certificates_path** - path to your HTTPS certificates (for standalone server only)
  - **socket_path** - path to a Unix socket file (ignored if you're running standalone server)
- **database** section:
  - **host** - database host name
  - **port** - database network port
  - **user** - database user name
  - **password** - database password
  - **name** - database name
- **log** section:
  - **enabled** - if you'd like to log to console and log file (true) or to console only (false)
  - **file** - the path to your log file (ignored if log_to_file is false)

### Create database tables using:

```sh
./start.sh --create-database
```

### Get your HTTPS certificate (for standalone server only):

```sh
./cert.sh
```

### Set up the certificate auto renewal:

Edit crontab using:

```sh
crontab -e
```

... and add this line at the end:

```sh
0 12 * * * /usr/bin/certbot renew --quiet
```

## 4. Start the server

a) to start the server in **console**:

```bash
./start.sh
```

b) to start the server in **console** in **hot reload** (dev) mode:

```bash
./start-hot.sh
```

c) to start the server in **screen**:

```bash
./start-screen.sh
```

d) to start the server in **screen** in **hot reload** (dev) mode:

```bash
./start-hot-screen.sh
```

To detach screen press **CTRL+A** and then **CTRL+D**.

To stop the server just press **CTRL+C**.

## 5. Load your stickers

You can load the set of stickers in Yellow Client or directly on your website.

- https://YOUR_SERVER/api/sticker_sets/ - JSON file with the list of sticker sets
- https://YOUR_SERVER/api/stickers/ID/ - JSON file with the list of stickers in set specified by ID
