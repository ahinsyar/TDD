package main;

public class music {
	private String music_name;
	private String musision;
	
	public music(String music_name, String musision) {
		this.music_name = music_name;
		this.musision = musision;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((music_name == null) ? 0 : music_name.hashCode());
		result = prime * result + ((musision == null) ? 0 : musision.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		music other = (music) obj;
		if (music_name == null) {
			if (other.music_name != null)
				return false;
		} else if (!music_name.equals(other.music_name))
			return false;
		if (musision == null) {
			if (other.musision != null)
				return false;
		} else if (!musision.equals(other.musision))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "music [music_name=" + music_name + ", musision=" + musision + "]";
	}

	public String getMusicName() {
		return this.music_name;
	}
	
	public String getMusision() {
		return this.musision;
	}
}
