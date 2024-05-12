import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class databaseconection {
    protected static Connection initializeDatabase() throws SQLException, ClassNotFoundException {
        // Aquí se realiza la conexión a la base de datos
        Connection con = null;
        String dbDriver = "com.mysql.cj.jdbc.Driver";
        String dbURL = "jdbc:mysql://localhost:3306";
        String dbUsername = "root";
        String dbPassword = "";

        try {
            Class.forName(dbDriver);
            con = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
        } catch (SQLException | ClassNotFoundException e) {
            throw e;
        }
        return con;
    }
}